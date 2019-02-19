import { KeeperModel } from '../keeper/keeper.model';




export class KeeperService {

  lastId= 1;

  private KeepCategory: KeeperModel[] = [
    new KeeperModel (1,'Наличные', '100,00'),
    new KeeperModel (2,'Кредитная крарта', '100,00')
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

  editKeeperModel() {

  }
}



