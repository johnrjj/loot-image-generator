# Loot Image Generator

`http://localhost:3000/api?loot=iPhone|Protocol%20Labs%20Shirt|Figma%20Hat%20(Cyrillic)|Torn%20Jeans|Dusty%20Vans|Hoodie%20with%20Pockets|Figma%20Fanny%20Pack|Wedding%20Band`

Separate each line of loot by a `|`.

e.g. loot=iPhone|Macbook|Backpack

Sourced from: `https://www.figma.com/file/Kqdak2Q81shWPhKgQtISyx/Loot-template?node-id=111%3A2`

Idea from Steve: `https://twitter.com/steveklbnf/status/1432200660880035846`

## Deploy your own

You'll want to fork this repository and deploy your own image generator.

1. Click the fork button at the top right of GitHub
2. Clone the repo to your local machine with `git clone URL_OF_FORKED_REPO_HERE`
3. Change directory with `cd og-image`
4. Make changes by swapping out images, changing colors, etc (see [contributing](https://github.com/vercel/og-image/blob/main/CONTRIBUTING.md) for more info)
5. Remove all configuration inside `vercel.json` besides `rewrites`
6. Run locally with `vercel dev` and visit [localhost:3000](http://localhost:3000)  (if nothing happens, run `npm install -g vercel`)
7. Deploy to the cloud by running `vercel` and you'll get a unique URL
8. Setup [GitHub](https://vercel.com/github) to auto-deploy on push

Once you have an image generator that sparks joy, you can setup [automatic GitHub](https://vercel.com/github) deployments so that pushing to master will deploy to production! 🚀

## Authors

- Steven ([@styfle](https://twitter.com/styfle)) - [Vercel](https://vercel.com)
- Evil Rabbit ([@evilrabbit](https://twitter.com/evilrabbit_)) - [Vercel](https://vercel.com)
