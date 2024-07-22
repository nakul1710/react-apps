import React from 'react';

interface ITweet {
  tweet: string;
  username: string;
  image: string;
  location: number[];
} 

const data : ITweet[] = [{
  tweet: "Hello, Yuvraj",
  username: "yuvraj",
  image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
  location: [443,34]
},
{
  tweet: "Hello, Janit",
  username: "janit",
  image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
  location: [443,34]
},{
  tweet: "Hello, Nakul",
  username: "nakul",
  image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
  location: [443,34]
},{
  tweet: "Hello, Nanu",
  username: "nanu",
  image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
  location: [443,34]
}]

function Feed ({feed}: {feed: ITweet[]}) {
  return (
    <>
    {feed.map((value: ITweet, index: number) => {
      return (
        <div key={index} className='border-2 border-black'>
            <h1>{value.username}</h1>
            <p>{value.tweet}</p>
            <img src={value.image} />
            <p>Lat: {value.location[0]}</p>
            <p>Long: {value.location[1]}</p>
        </div>
      )
    })}
    </>
  )
}

function App() {
  const [username, setUsername] = React.useState<string>("")
  const [feed, setfeed] =  React.useState<ITweet[]>(data)

  return (
    <>
    Username: 
    <input type="text" onChange={(event: any)=>{
      setUsername(event.target.value)
      const filterData = feed.filter((value: ITweet, index: number)=> value.username.indexOf(event.target.value) != -1)
      setfeed(filterData)
    }}/>
     <div className="border-2 border-black bg-slate-400">
        <h1>News Feed</h1>
        <Feed feed={feed}/>
      </div>
      {/* <div className="border-2 border-black bg-slate-400">
        <h1>News Feed</h1>
        <Feed feed={data} />
      </div> */}
        {/* <div className="border-2 border-black bg-slate-400">
        <h1>Profile Feed</h1>
        <Feed feed={data.filter((value: ITweet, index: number)=> value.username == "janit")} />
      </div> */}
    </>
  );
}

export default App;
