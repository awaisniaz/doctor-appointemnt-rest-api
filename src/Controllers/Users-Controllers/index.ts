import user_modal from "../../Models/user_modal"
export const userController = {
    login: async (req: any, res: any) => {
        const user = await user_modal.find()
        console.log(user)
        res.send({ messsage: "User get successfully", data: user })

    },
    register: async (req: any, res: any) => {
        console.log(req?.body)
        const user = new user_modal(req?.body)
        user.save().then(data => {
            res.send({ message: "user created success", data: data })
        }).catch(err => {
            res.send({ message: "Something wrong", data: err })
        })
    },
    updateUser: async (req: any, res: any) => {
        // const update = { $push: { tags: ['javascript'] } };
        // await BlogPost.updateOne({ title: 'Introduction to Promises' }, update, (err, res) => {
        //     console.log(res);
        // });
    },
    deleteUser: async (req: any, res: any) => {
        console.log('I am Delete Route')
    }
}