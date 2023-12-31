function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function openFilter() {
    document.getElementById('filter').style.display = 'block';
}

function doubleClick() {
    document.getElementById('filter').style.display = 'none';
}




    const skillsDropdown = document.getElementById('skills');
    const selectedSkillsContainer = document.getElementById('selectedSkillsContainer');

    // Event listener for changes in the skills dropdown
    skillsDropdown.addEventListener('change', updateSelectedSkills);

    // Function to update the selected skills
    function updateSelectedSkills() {
        // Clear existing selected skills
        selectedSkillsContainer.innerHTML = '';

        // Get the selected options from the dropdown
        const selectedOptions = Array.from(skillsDropdown.selectedOptions);

        // Create input fields for each selected skill
        selectedOptions.forEach(option => {
            const selectedSkillInput = document.createElement('input');
            selectedSkillInput.type = 'text';
            selectedSkillInput.value = option.text;
            selectedSkillInput.readOnly = true;
            selectedSkillsContainer.appendChild(selectedSkillInput);
        });
    }
    const durationInput = document.getElementById('duration');

    // Event listener for input changes
    durationInput.addEventListener('input', formatDuration);

    // Function to format the duration input
    function formatDuration() {
        let inputValue = durationInput.value;

        // Remove non-numeric characters
        inputValue = inputValue.replace(/[^0-9]/g, '');

        // Format the input as hh:mm:ss
        if (inputValue.length > 2) {
            inputValue = inputValue.replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3');
        }

        // Update the input value
        durationInput.value = inputValue;
    }


