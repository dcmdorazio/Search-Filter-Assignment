/*Author: Cody D'Orazio
    Assignment: Search filter project
    Date last edited: 5/4/19
    */

// Sport Variables for HTML format
var sport = [
    'Lacrosse',
    'Soccer',
    'Swimming',
    'Polo',
    'Baseball',
    'Football',
    'Cycling',
    'Fishing',
    'Hunting',
    'Golf',
    'Gymnastics',
    'Wrestling',
    //Added "-" to Cross Country because of "incomplete Classpath Warning"
    'Cross_Country',
    'Hockey',
    'Weightlifting',
    //Added "-" to Motor Sports because of "incomplete Classpath Warning"
    'Motor_Sports',
    'Skating',
];

ul = document.getElementById("sport-list");

var render_lists = function (lists) {
    var li = "";
    for (index in lists) {
        li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
};
render_lists(sport);


input = document.getElementById('filter_sport');

var filterSport = function (event) {
    keyword = input.value.toLowerCase();
    filtered_sport = sport.filter(funtion(sport);
    {
        sport = sport.toLowerCase();
        return sport.indexOf(keyword) > -1;
    }
)
    render_lists(filtered_sport);
};
input.addEventListener('keyup', filterSport);

myFunction;
loadScript(url);
{
    var head = document.getElementsByTagName('Head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}
