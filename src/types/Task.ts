import Realm from "realm";

export interface Task {
  _id: Realm.BSON.ObjectId;
  title: string;
  status: 'Pending' | 'Completed';
}
