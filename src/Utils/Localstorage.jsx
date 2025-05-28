const  employees =  [{
        "id": 1,
        "firstname": "Ajay",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts":{
          "active":2,
          "newTask":1,
          "completed":1,
          "failed":0
        },

        "tasks": [
          {
            "title": "Prepare monthly report",
            "description": "Compile sales and marketing data for the month.",
            "date": "2025-05-10",
            "category": "Reporting",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Team meeting",
            "description": "Discuss project status with the team.",
            "date": "2025-05-12",
            "category": "Meeting",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Client email follow-up",
            "description": "Send update email to client regarding project timeline.",
            "date": "2025-05-11",
            "category": "Communication",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Update website content",
            "description": "Change homepage banner and text.",
            "date": "2025-05-09",
            "category": "Web",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Fix login bug",
            "description": "Resolve login issue reported by users.",
            "date": "2025-05-08",
            "category": "Bugfix",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 2,
        "firstname": "Raheman",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts":{
          "active":3,
          "newTask":2,
          "completed":2,
          "failed":1
        },
        "tasks": [
          {
            "title": "Design landing page",
            "description": "Create mockup for the landing page.",
            "date": "2025-05-12",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Social media update",
            "description": "Post new content to LinkedIn.",
            "date": "2025-05-10",
            "category": "Marketing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Attend webinar",
            "description": "Join webinar on user experience design.",
            "date": "2025-05-14",
            "category": "Learning",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Review pull request",
            "description": "Review teammate's code.",
            "date": "2025-05-11",
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "firstname": "Saad",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts":{
          "active":1,
          "newTask":5,
          "completed":2,
          "failed":2
        },
        "tasks": [
          {
            "title": "Database backup",
            "description": "Ensure backup is taken before deployment.",
            "date": "2025-05-10",
            "category": "Maintenance",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Create deployment script",
            "description": "Write script for automated deployment.",
            "date": "2025-05-13",
            "category": "DevOps",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Research new tech stack",
            "description": "Explore React Native for mobile app.",
            "date": "2025-05-15",
            "category": "Research",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "firstname": "Varad",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts":{
          "active":1,
          "newTask":3,
          "completed":3,
          "failed":0
        },
        "tasks": [
          {
            "title": "Write blog post",
            "description": "Create blog on latest trends in UI/UX.",
            "date": "2025-05-09",
            "category": "Content",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Bug triage",
            "description": "Review and prioritize reported bugs.",
            "date": "2025-05-10",
            "category": "QA",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Internal feedback review",
            "description": "Read through internal project reviews.",
            "date": "2025-05-11",
            "category": "Review",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 5,
        "firstname": "Sami",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts":{
          "active":3,
          "newTask":2,
          "completed":1,
          "failed":2
        },
        "tasks": [
          {
            "title": "Update user guide",
            "description": "Edit and revise the user documentation.",
            "date": "2025-05-12",
            "category": "Documentation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "UI testing",
            "description": "Run tests for responsive design.",
            "date": "2025-05-11",
            "category": "Testing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Fix sidebar menu",
            "description": "Resolve alignment issue in sidebar.",
            "date": "2025-05-13",
            "category": "Bugfix",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Refactor profile module",
            "description": "Improve performance of profile section.",
            "date": "2025-05-14",
            "category": "Code Quality",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
    }]

const  admin = [{
    "id": 100,
    "email": "admin@example.com",
    "password": "123"
}]


export const SetlocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

// export const getlocalStorage =()=>{
//   const employees = JSON.parse(localStorage.getItem('employees'))
//   const admin = JSON.parse(localStorage.getItem('admin'))
//   return(employees, admin)
// }


export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || null;

  return { employees, admin }; // return an object
};  

