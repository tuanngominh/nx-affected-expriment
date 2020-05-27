import * as functions from 'firebase-functions';
import { CallableContext } from 'firebase-functions/lib/providers/https';

export function f1() {
  return {message: 'feature 1 done.'};
}

export const feature1 = {
  feature1: functions.https.onCall(
    (data: any, context: CallableContext) => {
      return f1();
    }
  ),
}
