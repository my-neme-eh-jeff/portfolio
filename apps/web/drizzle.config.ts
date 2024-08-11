import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./app/server/db/schema.ts",
	dialect: "sqlite",
	driver: "d1-http",
	dbCredentials: {
		databaseId: "2635797e-71bd-4eaf-9a3a-a26d480a9d6d",
		accountId: "fa13a639758bb2b73412d526d30a2acf",
		token: "5rlmfJxBaAGXYDHh4WOxUi2oMgok7eHecPNA8lQo",
	},
	out: "drizzleMigrations",
});
