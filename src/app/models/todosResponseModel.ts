import { Todos } from './todos';
import { TodosModel } from './todosModel';

export interface TodoResponseModel extends TodosModel {
  data: Todos[];
}
