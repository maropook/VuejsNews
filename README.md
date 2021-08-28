
http://localhost:8000/api_v2/entries/1/?format=json
{
"title": "ddddd",
"body": "ddddd",
"created_at": "2021-08-21T06:05:33.089101Z",
"status": "draft",
"author": {
"name": "aaaa",
"mail": "aaaaa@gmail.com"
}
}

http://localhost:8000/api_v2/entries/2/?format=json
{
"title": "fff",
"body": "ffff",
"created_at": "2021-08-21T10:34:54.332775Z",
"status": "public",
"author": {
"name": "aaaa",
"mail": "aaaaa@gmail.com"
}
}




http://localhost:8000/api_v2/entries/?format=json
{
"count": 3,
"next": "http://localhost:8000/api_v2/entries/?format=json&limit=2&offset=2",
"previous": null,
"results": [
{
"title": "ddddd",
"body": "ddddd",
"created_at": "2021-08-21T06:05:33.089101Z",
"status": "draft",
"author": {
"name": "aaaa",
"mail": "aaaaa@gmail.com"
}
},
{
"title": "fff",
"body": "ffff",
"created_at": "2021-08-21T10:34:54.332775Z",
"status": "public",
"author": {
"name": "aaaa",
"mail": "aaaaa@gmail.com"
}
}
]
}

http://localhost:8000/api_v2/users/?format=json
{
"count": 1,
"next": null,
"previous": null,
"results": [
{
"name": "aaaa",
"mail": "aaaaa@gmail.com"
}
]
}




news api
{
"status": "OK",
"copyright": "Copyright (c) 2021 The New York Times Company. All Rights Reserved.",
"section": "Health",
"last_updated": "2021-08-26T07:48:41-04:00",
"num_results": 25,
"results": [
{
"section": "health",
"subsection": "",
"title": "The Biden administration is being criticized for falling short on its pledge to provide vaccines to the world.",
"abstract": "",
"url": "https://www.nytimes.com/2021/08/26/health/the-biden-administration-is-being-criticized-for-falling-short-on-its-pledge-to-provide-vaccines-to-the-world.html",
"uri": "nyt://article/402b7c13-96d8-5cb4-95c0-20e08a23a6d5",
"byline": "By Sheryl Gay Stolberg",
"item_type": "Article",
"updated_date": "2021-08-26T22:44:36-04:00",
"created_date": "2021-08-26T10:50:16-04:00",
"published_date": "2021-08-26T10:50:16-04:00",
"material_type_facet": "",
"kicker": "",
"des_facet": [],
"org_facet": [],
"per_facet": [],
"geo_facet": [],
"multimedia": [
