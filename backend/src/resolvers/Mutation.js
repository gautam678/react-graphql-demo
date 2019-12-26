const Mutation = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if user is logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  }
  // createDog(parent, args, ctx, info) {
  //   global.dogs = global.dogs || [];
  //   const newDogs = { name: args.name };
  //   global.dogs.push(newDogs);
  //   return newDogs;
  // }
};

module.exports = Mutation;
