let timer;
        let isFocusTime = true;
        let focusTime = 25 * 60; 
        let breakTime = 5 * 60; 

        function setFocusMode() {
            isFocusTime = true;
            updateTimerDisplay(focusTime);
        }

        function setBreakMode() {
            isFocusTime = false;
            updateTimerDisplay(breakTime);
        }

        function startTimer() {
            if (!timer) {
                timer = setInterval(updateTimer, 1000);
            }
        }

        function stopTimer() {
            clearInterval(timer);
            timer = null;
        }

        function restartTimer() {
            stopTimer();
            timer = null; 
            if (isFocusTime) {
                updateTimerDisplay(focusTime);
            } else {
                updateTimerDisplay(breakTime);
            }
        }

        function updateTimer() {
            if (isFocusTime) {
                focusTime--;
                if (focusTime < 0) {
                    isFocusTime = false;
                    focusTime = 0;
                    alert("Focus time is over. Take a break!");
                }
            } else {
                breakTime--;
                if (breakTime < 0) {
                    isFocusTime = true;
                    breakTime = 0;
                    alert("Break time is over. Start focusing!");
                }
            }
            updateTimerDisplay(isFocusTime ? focusTime : breakTime);
        }

        function updateTimerDisplay(timeInSeconds) {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            document.getElementById('timer').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function showSettings() {
            document.getElementById('settings').style.display = 'block';
            stopTimer();
        }

        function saveChanges() {
            focusTime = document.getElementById('focusTime').value * 60;
            breakTime = document.getElementById('breakTime').value * 60;
            restartTimer();
            hideSettings();
        }

        function discardChanges() {
            hideSettings();
        }

        function resetChanges() {
            document.getElementById('focusTime').value = 25;
            document.getElementById('breakTime').value = 5;
        }

        function hideSettings() {
            document.getElementById('settings').style.display = 'none';
        }

