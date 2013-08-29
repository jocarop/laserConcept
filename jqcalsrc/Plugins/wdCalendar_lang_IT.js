var i18n = jQuery.extend({}, i18n || {}, { //edits from original by Jim Coltz 2011-12-09
    xgcalendar: {
        dateformat: {
            "fulldaykey": "MMddyyyy",
            "fulldayshow": "L d yyyy",
            "fulldayvalue": "M/d/yyyy", //Don't change this or above unless you edit the Xbasic as well.
            "Md": "W d/M",   //"W d/M" for non US dates. This can be set to your choice. "W" = short day name "L" = short month name "d" = day number "M" = month number
            "Md3": "L d",
            "separator": "/",
            "year_index": 2,
            "month_index": 0,
            "day_index": 1,
            "day": "d",
            "sun": "Dom",
            "mon": "&#76;un", //need to use html code for uppercase "L" 
            "tue": "Mar",
            "wed": "Mie",
            "thu": "Jue",
            "fri": "Vie",
            "sat": "Sab",
            "jan": "Ene",
            "feb": "Feb",
            "mar": "Mar",
            "apr": "Abr",
            "may": "May",
            "jun": "Jun",
            "jul": "Jul",
            "aug": "Ago",
            "sep": "Sep",
            "oct": "Oct",
            "nov": "Nov",
            "dec": "Dic"
        },
        "no_implemented": "Falta su implementacion",
        "to_date_view": "Click aqui para ver la fecha actual",
        "i_undefined": "No definido",
        "allday_event": "Todo el dia",
        "repeat_event": "Repetir evento",
        "time": "Tiempo",
        "event": "Nombre",
        "location": "Telefono",
        "participant": "",
		"description": "Tratamiento",
        "get_data_exception": "Excepcion al obtener datos",
        "new_event": "Nuevo evento",
        "confirm_delete_event": "Confirma que desea eliminar este evento?",
        "confrim_delete_event_or_all": "Desea borrar todos los eventos repetidos o solo el evento de este? \r\nPulse [OK] para eliminar solo este evento, haga click en [Cancelar] borrar todos los eventos.",
        "data_format_error": "Error de formato! ",
        "invalid_title": "Título del evento no puede estar en blanco o contener ($ o jQuery <>)",
        "view_no_ready": "Vista no esta lista",
        "example": "Ej. Junta en la sala 107",
        "content": "Asunto/Evento",
        "create_event": "Crear evento",
        "update_detail": "Modificar detalle",
        "click_to_detail": "Ver detalle",
        "i_delete": "Borrar",
        "day_plural": "Dias",
        "others": "",
        "item": " Mas[Ver Todo]",
		//additional items added JJC April 5, 2012
		//added for language support
        // below is for javascript on page
        "loadingpannel_loading": "Cargando datos...", //loading panel text
        "loadingpannel_success": "Exito!", //loading panel text
        "loadingpannel_request":"La peticion esta en proceso...", // loading panel text
        "errorpannel": "Lo sentimos, no se han podido cargar los datos. Favor de intentar de nuevo mas tarde.", // error panel text
        // below is for buttons on calendar
        "faddbtn": "Evento Nuevo", //add new event button text
        "faddbtn_title":"Click para crear un evento nuevo", //add new event button title text.
        "showtodaybtn":"Hoy", //Today button text
        "showtodaybtn_title":"Click aquí para volver al día de hoy", //Today button title text
        "showdaybtn":"Dia", //Day View Button text
        "showdaybtn_title":"Vista por Dia", //Day View Button title text
        "showweekbtn": "Semana", //Week View Button text
        "showweekbtn_title": "Vista Semanal", //Week View Button title text
        "showworkweekbtn":"Semana Laboral", //Work Week Button text
        "showworkweekbtn_title":"Vista Semana Laboral", //Work Week Button title text
        "showmonthbtn":"Mes", //Month Button text
        "showmonthbtn_title":"Vista por Mes", //Month Button title text
        "showreflashbtn":"Actualizar", // Refresh Button text
		"showreflashbtn_title":"Haga clic para actualizar datos del calendario.", // Refresh Button title text
        "sfprevbtn":"Anterior", // Previous button title
        "sfnextbtn":"Proximo", // Next button title
        "txtdatetimeshow":"Seleccionar Fecha", // Datepicker button intial value
        "alert_okbutton":"OK", //alert OK button text
        "alert_cancelbutton":"Cancelar", //alert Cancel button text
        "alert_confim":"Esta seguro que desea eliminar este evento?", //alert delete confirmation text
		"caption_edit":"Modificar detalle", // caption for edit details window 
		"caption_new_event":"Crear nuevo evento", // caption for Add detailed event window
		"caption_popup":"Detalles del evento", // caption for popup used instead of alert() 
		//below used for alert pop ups for read only events and when the hyperlink is clicked in the pop up bubble.
		"alert_start":"Inicio",
		"alert_end":"Fin",
		"alert_location":"Ubicacion",
		"alert_attends":"Participantes" ,
		//below used for pop up for deletes from the calendar.
        "confirm_delete_event": "Esta seguro que desea eliminar este evento?",
        "confirm_delete_event_or_all": "Este evento forma parte de una serie periódica. Elija los eventos que desea eliminar.",
		"msgbox_title":"Eliminar evento",
		"msgbox_onlythisevent":"Solo este evento.",
		"msgbox_allevents":"Todos los eventos en la serie.",
		"msgbox_thisandallfuture":"Este y todos los eventos futuros de la serie."
    }
});
