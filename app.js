const students = [
    {
        studentName: "Raza Murad",
        rollNo: 101,
        semesters: {
            1: { eng: 50, phy: 45, chem: 48, comp: 55, math: 42 },
            2: { eng: 52, phy: 48, chem: 50, comp: 58, math: 45 },
            3: { eng: 55, phy: 50, chem: 52, comp: 60, math: 48 },
            4: { eng: 58, phy: 52, chem: 55, comp: 62, math: 50 },
            5: { eng: 60, phy: 55, chem: 58, comp: 65, math: 52 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
    {
        studentName: "Sana Ahmed",
        rollNo: "102",
        semesters: {
            1: { eng: 85, phy: 72, chem: 80, comp: 90, math: 88 },
            2: { eng: 78, phy: 65, chem: 70, comp: 82, math: 75 },
            3: { eng: 92, phy: 88, chem: 85, comp: 95, math: 91 },
            4: { eng: 70, phy: 60, chem: 65, comp: 72, math: 68 },
            5: { eng: 80, phy: 75, chem: 78, comp: 85, math: 82 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
    {
        studentName: "Bilal Khan",
        rollNo: "103",
        semesters: {
            1: { eng: 60, phy: 55, chem: 58, comp: 62, math: 50 },
            2: { eng: 65, phy: 60, chem: 62, comp: 68, math: 55 },
            3: { eng: 70, phy: 65, chem: 68, comp: 75, math: 60 },
            4: { eng: 72, phy: 68, chem: 70, comp: 78, math: 65 },
            5: { eng: 75, phy: 70, chem: 72, comp: 80, math: 70 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
    {
        studentName: "Zainab Ali",
        rollNo: "104",
        semesters: {
            1: { eng: 95, phy: 90, chem: 92, comp: 98, math: 99 },
            2: { eng: 92, phy: 88, chem: 90, comp: 96, math: 97 },
            3: { eng: 94, phy: 91, chem: 93, comp: 97, math: 98 },
            4: { eng: 90, phy: 85, chem: 88, comp: 92, math: 95 },
            5: { eng: 96, phy: 93, chem: 95, comp: 99, math: 100 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
    {
        studentName: "Hamza Sheikh",
        rollNo: "105",
        semesters: {
            1: { eng: 45, phy: 50, chem: 48, comp: 52, math: 40 },
            2: { eng: 50, phy: 55, chem: 52, comp: 58, math: 45 },
            3: { eng: 55, phy: 60, chem: 58, comp: 62, math: 50 },
            4: { eng: 48, phy: 52, chem: 50, comp: 55, math: 42 },
            5: { eng: 52, phy: 58, chem: 55, comp: 60, math: 48 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
    {
        studentName: "Ayesha Malik",
        rollNo: "106",
        semesters: {
            1: { eng: 88, phy: 82, chem: 85, comp: 89, math: 92 },
            2: { eng: 85, phy: 80, chem: 83, comp: 87, math: 90 },
            3: { eng: 82, phy: 78, chem: 80, comp: 85, math: 88 },
            4: { eng: 80, phy: 75, chem: 78, comp: 82, math: 85 },
            5: { eng: 78, phy: 72, chem: 75, comp: 80, math: 82 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
    {
        studentName: "Usman Yousuf",
        rollNo: "107",
        semesters: {
            1: { eng: 70, phy: 65, chem: 68, comp: 72, math: 75 },
            2: { eng: 72, phy: 68, chem: 70, comp: 75, math: 78 },
            3: { eng: 75, phy: 70, chem: 72, comp: 78, math: 80 },
            4: { eng: 78, phy: 72, chem: 75, comp: 82, math: 85 },
            5: { eng: 80, phy: 75, chem: 78, comp: 85, math: 88 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
    {
        studentName: "Fatima Noor",
        rollNo: "108",
        semesters: {
            1: { eng: 55, phy: 60, chem: 58, comp: 62, math: 50 },
            2: { eng: 58, phy: 62, chem: 60, comp: 65, math: 55 },
            3: { eng: 60, phy: 65, chem: 62, comp: 68, math: 58 },
            4: { eng: 62, phy: 68, chem: 65, comp: 70, math: 60 },
            5: { eng: 65, phy: 70, chem: 68, comp: 75, math: 62 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
    {
        studentName: "Omar Farooq",
        rollNo: "109",
        semesters: {
            1: { eng: 90, phy: 85, chem: 88, comp: 92, math: 95 },
            2: { eng: 88, phy: 82, chem: 85, comp: 89, math: 92 },
            3: { eng: 85, phy: 80, chem: 83, comp: 87, math: 90 },
            4: { eng: 82, phy: 78, chem: 80, comp: 85, math: 88 },
            5: { eng: 80, phy: 75, chem: 78, comp: 82, math: 85 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
    {
        studentName: "Hina Javeed",
        rollNo: "110",
        semesters: {
            1: { eng: 65, phy: 70, chem: 68, comp: 75, math: 72 },
            2: { eng: 68, phy: 72, chem: 70, comp: 78, math: 75 },
            3: { eng: 70, phy: 75, chem: 72, comp: 80, math: 78 },
            4: { eng: 72, phy: 78, chem: 75, comp: 82, math: 80 },
            5: { eng: 75, phy: 80, chem: 78, comp: 85, math: 82 }
        },
        obtainedMarks: "", percentage: "", grade: ""
    },
];

const resultBoard = document.getElementById("result-board");

function renderStudents() {
    let htmlContent = "";

    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let semData = "", engData = "", phyData = "", chemData = "";
        let compData = "", mathData = "", obtainData = "";
        let perData = "", gradeData = "";

        let totalPercentage = 0;

        for (let s = 1; s <= 5; s++) {

            let sem = student.semesters[s];
            let obtained = sem.eng + sem.phy + sem.chem + sem.comp + sem.math;
            let percentage = (obtained / 500) * 100;

            let grade = percentage >= 80 ? "A+" :
                percentage >= 70 ? "A" :
                    percentage >= 60 ? "B" : "C";

            totalPercentage += percentage;

            semData += `<p>${s} Sem</p>`;
            engData += `<p>${sem.eng}</p>`;
            phyData += `<p>${sem.phy}</p>`;
            chemData += `<p>${sem.chem}</p>`;
            compData += `<p>${sem.comp}</p>`;
            mathData += `<p>${sem.math}</p>`;
            obtainData += `<p>${obtained}</p>`;
            perData += `<p>${percentage.toFixed(0)}%</p>`;
            gradeData += `<p>${grade}</p>`;
        }

        let avgPercentage = (totalPercentage / 5).toFixed(1);

        htmlContent += `
        <div class="student-card-box" style="margin-bottom:20px;">
            
            <div class="studentHeader">
                <h1>${i + 1} - ${student.studentName}</h1>
                <button id="showResult" onclick="showResult(${i})">Show Result</button>
            </div>

            <div id="data-${i}" class="student-data-active" style="display:none; flex-direction:column;">
                
                <div class="student-table" style="display:flex;">
                    <div class="data-column"><h4>Semester</h4>${semData}</div>
                    <div class="data-column"><h4>Eng</h4>${engData}</div>
                    <div class="data-column"><h4>Phy</h4>${phyData}</div>
                    <div class="data-column"><h4>Chem</h4>${chemData}</div>
                    <div class="data-column"><h4>Comp</h4>${compData}</div>
                    <div class="data-column"><h4>Math</h4>${mathData}</div>
                    <div class="data-column"><h4>Obtained</h4>${obtainData}</div>
                    <div class="data-column">
                        <h4>Total</h4>
                        <p>500</p><p>500</p><p>500</p><p>500</p><p>500</p>
                    </div>
                    <div class="data-column"><h4>%</h4>${perData}</div>
                    <div class="data-column"><h4>Grade</h4>${gradeData}</div>
                </div>

                <div class="average-box" style="margin-top:10px; text-align:center; font-weight:bold;">
                    Overall Average Percentage: ${avgPercentage}%
                </div>

            </div>
        </div>
        `;
    }

    resultBoard.innerHTML = htmlContent;
}

function showResult(index) {
    let data = document.getElementById(`data-${index}`);
    let btn = document.querySelectorAll(".studentHeader button")[index];

    if (data.style.display === "none") {
        data.style.display = "flex";
        btn.innerText = "Hide Result";
    } else {
        data.style.display = "none";
        btn.innerText = "Show Result";
    }
}

renderStudents();