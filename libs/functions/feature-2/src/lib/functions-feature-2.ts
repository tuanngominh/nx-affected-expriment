import * as functions from 'firebase-functions';
import { CallableContext } from 'firebase-functions/lib/providers/https';

export const feature2 = {
  feature2: functions.https.onCall(
    (data: any, context: CallableContext) => {
      return {message: 'feature 2 done'};
    }
  ),
}
