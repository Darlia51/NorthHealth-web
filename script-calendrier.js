//INITIALISER CALENDRIER//
document.addEventListener('DOMContentLoaded', function() {
	const calendarEl = document.getElementById('calendar')
	const calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth'
	})
	calendar.render()
})

//JOURS GRISÉS-DÉSACTIVÉS//
$('#calendar').fullCalendar({
	// Options de configuration du calendrier
	events: function(start, end, timezone, callback) {
			// Récupérer les événements à partir d'une source de données (par exemple une base de données)
			// ...
			// Appeler la fonction de rappel avec les événements récupérés
			callback(events);
	},
	disabledDays: function(date) {
			// Vérifier si la date est désactivée
			// Retourner true si la date doit être désactivée, false sinon
			// ...
	},
	// Autres options de configuration du calendrier
});
