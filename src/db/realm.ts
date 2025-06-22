import Realm from 'realm';

export class TaskSchema extends Realm.Object<TaskSchema> {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  status!: 'Pending' | 'Completed';

  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      status: 'string',
    },
  };
}

const realm = new Realm({ schema: [TaskSchema], schemaVersion: 1 });

export default realm;
