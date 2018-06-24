const translations = {
	
	'quiz': {
		'points': '{count} Punkt ::: {count} Punkte',
		'question': 'Frage {index} aus {total}',
		'accepted-answer': 'Richtige Antwort',
		'your-answer': 'Eingegebene Antwort',
		'explanation': 'Erklärung',
	},

	'welcome': {
		'header': 'Mars Quiz.Drücke hier um zu starten!',
		'info': '<h2>Teste Dein Wissen über den Mars, und gewinne einen der 3 Preise!</h2><p>1. Preis: Ein Amazon Gutschein in Wert von 20 Euro</p><p>2. Preis: Ein Amazon Gutschein in Wert von 15 Euro</p><p>3. Preis: Ein Amazon Gutschein in Wert von 10 Euro</p>',
	},

	'ranking': {
		'title': 'Aktuelle Rangliste',
		'total': 'Teilnehmer {total} ::: Teilnehmerzahl {total}',
		'class': 'Schüler der Klasse {class}',
		'reload': 'Rangliste aktualisieren',
		'current-page': 'Seite {page} von {total}',
	},

	'play': {

		'player-caption': 'Teilnehmer Informationen',
		'player-info': 'Bitte folgende Pflichteingabefelder ausfüllen und das Mars Quiz starten. Das Quiz umfasst 10 Fragen. Bei Fragen die eine Texteingabe erfordern, steht eine  virtuelle Tastatur zur Verfügung. Berühre das Tastatursymbol auf der rechten Seite, um die virtuelle Tastatur zu aktivieren. Die ersten 3 Teilnehmer mit der höchsten Punktzahl (bei gleicher Punktzahl gilt die kürzere Eingabezeit) erhalten jeweils einen Amazon Gutschein, an die eingetragene E-Mail Adresse. Viel Erfolg!',
		
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