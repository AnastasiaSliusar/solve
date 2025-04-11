## Testing js-rattler

The following steps help you to run this code

```bash
micromamba create -n test-solve "nodejs=20" yarn git -c conda-forge
micromamba activate test-solve

git clone git@github.com:AnastasiaSliusar/solve.git

npm i
npm run build
npm run start
```