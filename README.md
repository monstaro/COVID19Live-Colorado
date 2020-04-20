## COVID19 Live Colorado
Updated daily, this application allows Colorado residents to check their local county for Covid-19 infection rates, fatalities, safety tips, and more. 

### Navigation

The site has a number of sections,
- About
  (Just some basic info about the site)
- Staying Protected
  (Various guides to safety in a pandemic)
- Your County Healh Department
  (Find health department information for your county)
- Live County Stats
  (Find COVID-19 Numbers for your area)
- Bookmarks
  (Bookmark counties and look back at a later time)

### Images

![Page 3](https://user-images.githubusercontent.com/32964891/79809833-bb294600-832e-11ea-8c07-d0d37f3436a7.png)
![Page 2](https://user-images.githubusercontent.com/32964891/79809839-bfedfa00-832e-11ea-89f0-0a57f72650ed.png)
![Page 1](https://user-images.githubusercontent.com/32964891/79809850-c8463500-832e-11ea-8b4f-8147e5e2b8ec.png)

### Instructions

Clone Down this repo, run the following in your terminal, npm install, npm start.
In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.




### Tech Used

- React
- React Router
- Redux
- Jest
- React Testing Library
- SASS/SCSS/CSS3
- HTML5
- Fetch API
- CSVtoJSON (https://www.npmjs.com/package/csvtojson)

### Sources
- [NY Times COVID-19 Map](https://github.com/nytimes/covid-19-data/blob/master/us-counties.csv)
- [CDPHE Open Data](https://data-cdphe.opendata.arcgis.com/datasets/colorado-covid-19-positive-cases-and-rates-of-infection-by-county-of-identification?geometry=-121.371%2C35.977%2C-89.731%2C41.950)
- [Postman COVID-19 APIs](https://documenter.getpostman.com/view/8854915/SzYXVdyQ?version=latest)

### Future Iterations

- I would like to include some sort of interactive map over the counties. There is GEOjson data included in the original dataset from CDPHE.

- I would also like to do something similar for other states in the US.
