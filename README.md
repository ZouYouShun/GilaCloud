# Gilacloud

# Part 2

# Database

mongoDB

### MODEL
```ts

interface UserModel {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  photoURL: string;
}

interface CoffeeModel{
  id: string;
  creator: UserModel;
  title:string;
  price:number;
  createdAt: Date;
  updatedAt: Date;
}

interface OrderModel{
  id: string;
  creator: UserModel;
  coffees: OrderCoffeeModel[];
  createdAt: Date;
  updatedAt: Date;
}

interface OrderCoffeeModel{
  id: string;
  creator: UserModel;
  // copy from coffee data, not releation
  coffee: CoffeeModel & { amount:number; remark:string }; 
  createdAt: Date;
  updatedAt: Date;
}

```
## Coffee
| method | path | discription |
|---|---|---|
| GET | `api/coffee`| get all coffee data list |
| GET | `api/coffee/{id}`| get coffee order data with id|
| POST | `api/coffee`| add coffee data|
| PATCH | `api/coffee/{id}`| update coffee data with id|
| DELETE | `api/coffee/{id}`| update coffee data with id|


## Order
### API
| method | path | discription |
|---|---|---|
| GET | `api/order`| get all order data list |
| GET | `api/order/{id}`| get order order data with id, provide query like below|
| POST | `api/order`| add order data, when add order, send coffees data, add to OrderCoffeeModel, **and read the database price to set price, not use frontEnd send price to set price.**|
| PATCH | `api/order/{id}`| update order data with id|
| DELETE | `api/order/{id}`| update order data with id|


## OrderQuery
```ts
interface OrderQueryModel{
  creatorId:string;
  fromDateTime:Date;
  toDateTime:Date;
  
}
```
