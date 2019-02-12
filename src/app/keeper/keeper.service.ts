import { KeeperModel } from './keeper.model';




export class KeeperService {

  lastId: 1;
  public KeepCategory: KeeperModel[] = [

  ];

  addKeeperModel(keeper: KeeperModel) {
    if (!keeper.id) {
      keeper.id = ++this.lastId;
    }
    this.KeepCategory.push(keeper);
  }

  getKeeperModel() {
    return this.KeepCategory;
  }

  editKeeperModel() {}
}


