## This is a create-react-app project

# Note

```
Done working with the Charts and Maps route. Currently working with Contact route and Redux.
```

live-app-link: https://taiyo-cm-app.vercel.app/

### How to get started

---

#### step 1:

Clone the git repository. Run the command in your console.

```
git clone https://github.com/Hasibul-Hasan-ofcs/Taiyo_CM_App.git
```

#### step 2:

Navigate into the project folder.

```
cd Taiyo_CM_App
```

#### step 3:

Install all the project dependencies. Use the command

```
npm install
```

#### step 4:

Run the app using command

```
npm start
```

### API info

---

#### API 1:

```
https://disease.sh/v3/covid-19/historical/all?lastdays=all
```

This api is basically implemented to generate dynamic line graph data in this project. This API provides an object with three different properties - cases, deaths and recovered. All these properties include individual object with specified data with date and number of occurrence for that particular type. This is basically worldwide disease related data that highlights data on different dates.

#### API 2:

```
https://disease.sh/v3/covid-19/countries
```

This api is basically country-wise data that shows different types of information related to that country and the disease in that country. I have used this one in order to implement React leaflet with info marker in this project.
