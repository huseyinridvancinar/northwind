import { Category } from './category';
import { TodosModel } from './todosModel';

export interface CategoryResponseModel extends TodosModel {
  data: Category[];
}
