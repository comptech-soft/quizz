const translations = {
	
	'quiz': {
		'points': '{count} Punkt ::: {count} Punkte',
		'question': 'Frage {index} aus {total}',
		'accepted-answer': 'Richtige Antwort',
		'your-answer': 'Eingegebene Antwort',
		'explanation': 'Erklärung',
	},

	'welcome': {
		'header': 'Mars Quiz',
		'info': '<h2>Teste Dein Wissen über den Mars, und gewinne einer der 3 Preise!</h2><p>1. Preis: Ein Amazon Gutschein in Wert von 20 Euro</p><p>2. Preis: Ein Amazon Gutschein in Wert von 15 Euro</p><p>3. Preis: Ein Amazon Gutschein in Wert von 10 Euro</p>',
	},

	'ranking': {
		'title': 'Aktuelle Rangliste',
		'total': 'Teilnehmer {total} ::: Teilnehmerzahl {total}',
		'class': 'Schüler der Klasse {class}',
		'reload': 'Rangliste aktualisieren',
		'current-page': 'Seite {page} von {total}',
	},

	'play': {

		'player-caption': 'Teilnehmer Eingaben',
		'player-info': 'Phasellus mi nisl, accumsan id laoreet sed, cursus ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce eu fringilla est. Morbi vulputate in neque et euismod. Proin imperdiet lacus non urna porttitor pulvinar. Aenean quam lorem, facilisis a condimentum vel, posuere nec nunc. Aliquam erat volutpat.',
		
		'finish': {
			'header': 'Glückwunsch. Quiz beendet!',
			'body': 'Eine Zusamenfassung der Fragen, den richtigen Antworten, den eingegebenen Antworten, sowie die erreichte Punktzahl sind hier zu sehen:',
		},

		'form': {
			'labels': {
				'first_name': 'Name',
				'last_name': 'Vorname',
				'class': 'Klasse',
				'email': 'E-Mail Adresse',
				'start-contest': 'Starte das Mars Quiz',
			}
		},

		'actions': {
			'restart': 'Erneut starten',
			'next': 'Nächste Frage',
			'prev': 'Vorherige Frage',
			'finish': 'Abschließen!',
		},

		'modals': {
			'finish': {
				'title': 'Bestätigen!',
				'content': 'Möchten Sie das Quiz abschließen? Ja, die eingegebenen Antworten werden ausgewertet und die erreichte Punktzahl wird angezeigt. Um die Antworten noch einmal zu bearbeiten, wählen Sie die Nein',
				'yes': 'Ja',
				'no': 'Nein',
			},

			'restart': {
				'title': 'Neuanfang bestätigen!',
				'content': 'Möchten Sie das Quiz neu starten? Ja, alle bisherigen Antworten werden gelöscht und das Quiz startet erneut bei Frage 1. Nein, Quiz wird fortgeführt.',
				'yes': 'Ja',
				'no': 'Nein',
			}
		}

	},

	'report': {
		'summary': {
			'points-achieved': 'Erreichte Punktzahl',
			'points-available': 'Maximale Punktzahl',
			'percent-achieved': '%',
			'percent-available': '%',
		}
	}

};

export default translations;