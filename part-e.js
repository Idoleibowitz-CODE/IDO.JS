const movie = { id: 41, title: "Orbit", genre: "Sci-Fi", rating: 8.4 };


const { title , genre , rating } = movie; // 22 a

console.log(`${title} | ${genre} | ${rating}`); // 22 b

const recommendedMovies = ["Orbit", "Ocean", "Skyline"]; const [firstMovie, secondMovie] = recommendedMovies; console.log(firstMovie, secondMovie); // 22 c



//const FormatUser = {
//    name  : "danalevi",
 //   email : "dana@example.c"
//};

//const {name , email} = FormatUser;

//console.log(`${name} , ${email}`);


const user = { id: 7, name: "Dana Levi", email: "dana@example.com", isActive: true };








const GUS = ({name,isActive}) => {
    if (isActive == true){
        return `${name} ,active`
    }
    return `${user.name , inactive}`
};




const player = { id: 1, nickname: "Noni", score: 1200, level: 8 }; const comments = [ { id: 1, user: "Noa", text: "Great game!", likes: 12 }, { id: 2, user: "Dan", text: "Well played", likes: 7 } ]; const newComment = { id: 3, user: "Maya", text: "Amazing score!", likes: 0 };








const result = GUS(user);
console.log(result);

const updateplayer = {...player, score: 1350};
console.log(player);
console.log(updateplayer);
const commentsafteradd = [...comments , newComment]
console.log(comments);
console.log(commentsafteradd);



const tasks = [ { id: 1, title: "Write tests", completed: false, priority: "high" }, { id: 2, title: "Update profile", completed: true, priority: "low" }, { id: 3, title: "Fix login", completed: false, priority: "high" } ];

const RemoveTaskById = (tasks ,id ) => tasks.fillter(i => i.id !== id);
const tasksAfterDelete=RemoveTaskById(tasks , 2);
console.log(tasks);
console.log(tasksAfterDelete);
















