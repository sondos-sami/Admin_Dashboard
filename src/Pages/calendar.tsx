import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import type {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

const INITIAL_EVENTS = JSON.parse(localStorage.getItem("events") || "[]");

let eventGuid = INITIAL_EVENTS.length + 1;
function createEventId() {
  return String(eventGuid++);
}

export default function DemoApp() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<EventApi | null>(null);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectInfo, setSelectInfo] = useState<DateSelectArg | null>(null);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "info" | "error";
  }>({ open: false, message: "", severity: "success" });

  useEffect(() => {
    localStorage.setItem(
      "events",
      JSON.stringify(
        currentEvents.map((e) => ({
          id: e.id,
          title: e.title,
          start: e.start,
          end: e.end,
          allDay: e.allDay,
        }))
      )
    );
  }, [currentEvents]);

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleDateSelect(selectInfo: DateSelectArg) {
    setSelectInfo(selectInfo);
    setOpenDialog(true);
  }

  function handleAddEvent() {
    if (newEventTitle && selectInfo) {
      const calendarApi = selectInfo.view.calendar;
      calendarApi.unselect();
      calendarApi.addEvent({
        id: createEventId(),
        title: newEventTitle,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
      setSnackbar({
        open: true,
        message: "Event added successfully!",
        severity: "success",
      });
    }
    setNewEventTitle("");
    setOpenDialog(false);
  }

  function handleEventClick(clickInfo: EventClickArg) {
    setEventToDelete(clickInfo.event);
    setDeleteDialog(true);
  }

  function confirmDeleteEvent() {
    if (eventToDelete) {
      eventToDelete.remove();
      setSnackbar({
        open: true,
        message: "Event deleted!",
        severity: "error",
      });
    }
    setEventToDelete(null);
    setDeleteDialog(false);
  }

  function handleEvents(events: EventApi[]) {
    setCurrentEvents(events);
  }

  return (
    <div className="demo-app" style={{ display: "flex", flexDirection: "column" }}>
      <div className="demo-app-main" style={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            fullWidth
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddEvent} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogTitle>Delete Event</DialogTitle>
        <DialogContent>Are you sure you want to delete this event?</DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)}>Cancel</Button>
          <Button onClick={confirmDeleteEvent} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </div>
  );
}

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <>
      <b>{eventInfo.timeText}</b>&nbsp;
      <i>{eventInfo.event.title}</i>
    </>
  );
}
