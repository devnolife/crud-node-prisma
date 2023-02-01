

const Query = objectType({
    name: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('allUsers', {
            type: 'User',
            resolve: (_parent, _args, context) => {
                return context.prisma.user.findMany()
            },
        })
    }
})

const User = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.int('id')
        t.string('name')
        t.nonNull.string('email')
    }
})


t.field('createDraft', {
    type: 'Post',
    args: {
        data: nonNull(
            arg({
                type: 'PostCreateInput',
            }),
        ),
    },
    resolve: (_, args, context) => {
        const userId = getUserId(context)
        return context.prisma.post.create({
            data: {
                title: args.data.title,
                content: args.data.content,
                authorId: userId,
            },
        })
    },
})


const Mutation = objectType({
    name: 'Mutation',
    definition(t) {
        t.field('createUser', {
            type: 'User',
            args: {
                data: nonNull(
                    arg({
                        type: 'UserCreateInput',
                    }),
                ),
            },
            resolve: (_, args, context) => {
                return context.prisma.user.create({
                    data: {
                        name: args.data.name,
                        email: args.data.email,
                    },
                })
            },
        })
    }
})