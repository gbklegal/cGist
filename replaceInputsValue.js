/**
 * @function riv (ReplaceInputsValue)
 * This function replaces the inputs value from 'Du' to 'Sie'
 * and from 'Mitteilung' to 'Beauftragung'
 */
function riv() {
    let inputStorage = [
        "Vielen Dank für Ihre Beauftragung. Sie wurde gesendet.",
        "Beim Versuch, Ihre Beauftragung zu senden, ist ein Fehler aufgetreten. Bitte versuchen Sie es später nochmal.",
        "Ein oder mehrere Felder weisen einen Fehler auf. Bitte überprüfen Sie das und versuchen es erneut.",
        "Beim Versuch, Ihre Beauftragung zu senden, ist ein Fehler aufgetreten. Bitte versuchen Sie es später nochmal.",
        "Sie müssen die Bedingungen und Konditionen akzeptieren, bevor Sie Ihre Beauftragung senden können.",
        "Dies ist ein Pflichtfeld.",
        "Ihre Eingabe ist zu lang.",
        "Ihre Eingabe ist zu kurz.",
        "Beim Hochladen der Datei ist ein unbekannter Fehler aufgetreten.",
        "Es ist nicht erlaubt, Dateien dieses Typs hochzuladen.",
        "Diese Datei ist zu groß.",
        "Beim Hochladen der Datei ist ein Fehler aufgetreten.",
        "Das Datumsformat ist ungültig.",
        "Das Datum liegt vor dem frühesten zulässigen Datum.",
        "Das Datum liegt nach dem spätesten zulässigen Datum.",
        "Das Zahlenformat ist ungültig.",
        "Die Zahl ist niedriger als das zulässige Minimum.",
        "Die Zahl ist größer als das zulässige Maximum.",
        "Die Antwort auf das Quiz ist falsch.",
        "Die eingegebene E-Mail-Adresse ist ungültig.",
        "Die URL ist ungültig.",
        "Die Telefonnummer ist ungültig."
    ];
    document.querySelectorAll('#messages-panel input').forEach((inpt, idx) => inpt.value = inputStorage[idx]);
}
