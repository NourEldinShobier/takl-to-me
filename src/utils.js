

export function playAudio(filePath, callback) {
    const audio = new Audio(filePath);

    audio.addEventListener('ended', function() {
        callback();
    });
 
    audio.play().then(() => {
        console.log('Audio is playing.');
    }).catch(error => {
        console.error('Error playing audio:', error);
    });
}

//////////////////

export function renderer(node, graph) {
    if(node.type === 'tts'){ renderTTS(node, graph)}
    else if(node.type === 'mcq'){ renderMCQ(node, graph) }
    else if(node.type === 'game'){ renderGame(node, graph) }
}

export function renderTTS(node, graph){
    playAudio(node.file, ()=> {
        if(node.data.next) {
            setTimeout(()=> {renderer(graph.find(item => item.id === node.data.next), graph)}, 300)
        }
    });
}

export function renderMCQ(node, graph){
    playAudio(node.file, ()=> {
        const answers = node.data.answers
      
        const buttonContainer = document.getElementById('buttonContainer');
  
        answers.forEach(answer => {
          const button = document.createElement('button');
        
          button.textContent = answer.txt;
        
          button.addEventListener('click', () => {
              if(answer.next) {
                  renderer(graph.find(item => item.id === answer.next), graph)
              }
          });
  
          buttonContainer.appendChild(button);
        });
    });
}

export function renderGame(node, graph) {
    node.data.code(node.data.graph);
}