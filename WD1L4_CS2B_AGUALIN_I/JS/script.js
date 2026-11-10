// Student names array
const studentNames = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];

// Student grades array
const studentGrades = [92, 85, 78, 97, 74];

// Evaluate individual grade function
function evaluateGrade(grade) {
    let equivalent, remark, leader;

    if (grade >= 95 && grade <= 100) {
        equivalent = "1.0";
        remark = "Passed";
        leader = "1st Class Academic Leader";
    } else if (grade >= 90 && grade <= 94) {
        equivalent = "1.5";
        remark = "Passed";
        leader = "2nd Class Academic Leader";
    } else if (grade >= 85 && grade <= 89) {
        equivalent = "2.0";
        remark = "Passed";
        leader = "-";
    } else if (grade >= 80 && grade <= 84) {
        equivalent = "2.5";
        remark = "Passed";
        leader = "-";
    } else if (grade >= 75 && grade <= 79) {
        equivalent = "2.75";
        remark = "Passed";
        leader = "-";
    } else {
        equivalent = "Failed";
        remark = "Failed";
        leader = "-";
    }

    return { equivalent, remark, leader };
}

// Loop through arrays and display output
function displayEvaluatedGrades() {
    const tableBody = document.getElementById("grade-output-body");
    tableBody.innerHTML = ""; // Clear table

    // For loop processor
    for (let i = 0; i < studentNames.length; i++) {
        let name = studentNames[i];
        let grade = studentGrades[i];

        let result = evaluateGrade(grade);

        // Create new table row element
        let row = document.createElement("tr");

        // Insert row data
        row.innerHTML = `
            <td>${name}</td>
            <td>${grade}</td>
            <td>${result.equivalent}</td>
            <td>${result.remark}</td>
            <td>${result.leader}</td>
        `;

        // Append row to body
        tableBody.appendChild(row);
    }
}