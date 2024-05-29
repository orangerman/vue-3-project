// 定义接口，用于限制Person对象的属性
export interface PersonInter{
    id: string,
    name: string,
    age: number
}

// 一个自定义类型
export type Persons = Array<PersonInter>