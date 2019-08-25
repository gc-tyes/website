int zonePorts[9] = {13, 12, 11, 7, 9, 10, 4, 3, 2};
int zoneLast[9] = {0, 0, 0, 0, 0, 0, 0, 0, 0};
int lastBounceTime[9] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

unsigned long time;

#define DEBUG false
#define REMOVE_SHIELD_DELAY 1000 // in milliseconds

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  for (int i = 0; i < 9; i++) {
    pinMode(zonePorts[i], INPUT_PULLDOWN);
  }
}

/**
 * Logs event to serial
 */
void logEvent(int portState, int i) {
  if (portState == 1) {
    lastBounceTime[i] = time;
    Serial.print(time/1000.0); // print time in the format 0.00 seconds
  } else {
    lastBounceTime[i] = time - REMOVE_SHIELD_DELAY;
    Serial.print((time - REMOVE_SHIELD_DELAY)/1000.0);
  }
  Serial.print(",");
  Serial.print(i + 1);
  Serial.print(",");
  Serial.print(portState);
  zoneLast[i] = portState; 
  
  if (DEBUG) {
    Serial.print(",");
    for (int i = 0; i < 9; i++) {
      Serial.print("  Z");
      Serial.print(i + 1);
      Serial.print(" = ");
      Serial.print(zoneLast[i]);
      if (i < 8)
        Serial.print(",");
    }
  }
  Serial.println();
}

void loop() {
  // read the zone input pins:
  for (int i = 0; i < 9; i++) {
    int portState = digitalRead(zonePorts[i]);
    time = millis();
  
    if (time - lastBounceTime[i] > REMOVE_SHIELD_DELAY) {
    if (portState != zoneLast[i]) {
        logEvent(portState, i);
      }
    } else if (portState == 1) {
      // shield window for debounce
      /*
       * Give priority to state 1 due to hardware design, if
       * value becomes 1, shift shield window forward, if 0
       * for longer than the window, log 0 at time - shield
       * window delay
       */
      lastBounceTime[i] = time; 
    }
  }

  
}
