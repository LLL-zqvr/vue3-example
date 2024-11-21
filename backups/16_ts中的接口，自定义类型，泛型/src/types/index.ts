//定义一个接口用于限制person对象的具体属性
export interface PersonInter {
  id: string;
  name: string;
  age: number;
}

//一个自定义类型
// export type Persons = PersonInter[];也可以写成下面那种格式,那是泛型写法
export type Persons = Array<PersonInter>;
