import { mutation, query } from "./_generated/server";

export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Called storeUser without authentication present");

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (user) {
      if (user.name !== identity.name) {
        await ctx.db.patch(user._id, { name: identity.name });
      }
        await ctx.db.patch(user._id, { lastActiveAt: Date.now() });

      return user._id;
    }

    return await ctx.db.insert("users", {
      name: identity.name ?? "Anonymous",
      email: identity.email ?? "no-email@unknown.com", // ✅ Added
      tokenIdentifier: identity.tokenIdentifier,
      imageUrl: identity.pictureUrl ?? null, // ✅ Optional field
      username: identity.username ?? null,   // ✅ Optional field
      createdAt: Date.now(),
      lastActiveAt: Date.now(),
    });
  },
});

export const getCurrentUser = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (!user) throw new Error("User not found");
    return user;
  },
});
