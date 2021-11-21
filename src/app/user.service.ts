export class UserService {
    public users = [
        {
            name: "Jonas",
            surname: "Jonaitis",
            orders: [
                {
                    name: "Šaldytuvas",
                    price: 380
                }
            ]

        },
        {
            name: "Antanas",
            surname: "Petraitis",
            orders: [
                {
                    name: "Šaldytuvas",
                    price: 380
                }
            ]
        },

        {
            name: "Ona",
            surname: "Onienė",
            orders: []
        },
    ];

public order(userIndex: number, productName: string, productPrice: number){
    this.users[userIndex].orders.push({
        name: productName,
        price: productPrice
    })
}

public addUser(userName: string, userSurname: string){
    this.users.push({
        name: userName,
        surname: userSurname,
        orders: []
    })
}

}