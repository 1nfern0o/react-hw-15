import React from 'react';
import Posts from "./Components/Post/post";
import vader from "./vader.jpg";
import commVader from "./comm_vader.jpg";

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";


/*const POST_LIST = [
  {
    author: {
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader"
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: {RAY_IMAGE},
    date: "26 февр."
  }
];*/


function App() {
  return (
      <div>
        <Posts author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader"
        }}
               content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
               image={RAY_IMAGE}
               date={"26 февр."}
        />
          <Posts author={{
              name: "Twin Anakin skywalker",
              photo: vader,
              nickname: "@dart_vader"
          }}
                 content="Darth Vader is a fictional character in the Star Wars franchise. Born Anakin Skywalker"
                 image={commVader}
                 date={"20 янв."}
          />
        {/* { POST_LIST.map(post => <Posts {...post}/>)}*/}
      </div>
  );
}

export default App;