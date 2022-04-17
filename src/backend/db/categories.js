import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Earth",
    imageUrl : "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWFydGh8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    description: "Quizes based on Earth",
  },
  {
    _id: uuid(),
    categoryName: "WildLife",
    imageUrl : "https://media.istockphoto.com/photos/two-rothschilds-giraffes-in-northern-uganda-picture-id1307291479?b=1&k=20&m=1307291479&s=170667a&w=0&h=SWKMKkWhu1CS7l55vWgMPZYanqjdwAia6puS8YSCpEo=",
    description: "Quizes based on Earth",
  },
];