![Convertio Image](https://raw.githubusercontent.com/zett-8/images/refs/heads/master/hrr.png)

# 🔥 Hono React Router

**Hono React Router** is a production-ready template designed to launch your web app seamlessly on **Cloudflare Workers**.  
It builds upon the official [React Router Cloudflare D1 template](https://github.com/remix-run/react-router-templates/tree/main/cloudflare-d1), offering a more powerful and flexible foundation.  

📖 Explore the [Hono](https://hono.dev/) and [React Router](https://reactrouter.com/) documentation for full feature references.

---

**Demo:** [https://hono-react-router.zett.workers.dev](https://hono-react-router.zett.workers.dev)

<br />

## 🚀 Available Setups

This repository also includes a lighter version under the [`mini`](https://github.com/zett-8/hono-react-router/tree/mini) branch — choose the version that best fits your needs.

| Feature / Branch               | `main` | `mini` |
|-------------------------------|--------|--------|
| Hono Server                   | ✅     | ✅     |
|  └─ Clean Architecture       | ✅     |        |
| React Router (Framework mode) | ✅     | ✅     |
| D1 Database                   | ✅     |        |
| Authentication ([Clerk](https://clerk.com/)) | ✅ |        |
| Drizzle ORM                   | ✅     |        |
| Testing (Vitest)              | ✅     |        |
| Zod Validation                | ✅     |        |
| Tailwind CSS                  | ✅     | ✅     |
| Prettier                      | ✅     | ✅     |
| ESLint (Flat Config)          | ✅     | ✅     |
| Vite                          | ✅     | ✅     |
| TypeScript                    | ✅     | ✅     |

<br />

## 🛠️ Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Generate types

```bash
pnpm typegen
```

### 3. Run initial database migration

```bash
pnpm db:generate
pnpm db:migrate
```

### 4. Start the development server (with HMR)

```bash
pnpm dev
```
Your app will be available at: http://localhost:5173

### Optional: Run with Wrangler

```sh
pnpm build
pnpm start
```

<br />

## 🏗 Building for Production

To create a production-ready build:

```bash
pnpm run build
```

<br />

## 🚢 Deployment

Deployment is handled via [Wrangler](https://developers.cloudflare.com/workers/wrangler/).

### Deploy to production:

```sh
npx wrangler deploy
```

### Deploy a preview version:

```sh
npx wrangler versions upload
```

Once validated, you can promote a version to production:
```sh
npx wrangler versions deploy
```

<br />

## 🎨 Styling

This template comes pre-configured with [Tailwind CSS](https://tailwindcss.com/) for rapid styling.
Feel free to replace or extend it with your preferred CSS framework or methodology.

