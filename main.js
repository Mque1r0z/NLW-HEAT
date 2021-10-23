const linksSocialMedia = {
  github: 'Mque1r0z',
  youtube: 'channel/UC26oAnO3fOutmYMuLjVQp7Q',
  facebook: 'matheus.queiroz.96592836',
  instagram: 'matheus_quene',
  twitter: 'mqueir0z'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute('class')
    //alert(social)
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()
/*código pra mudar os links*/

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPic.src = data.avatar_url
      userGitHubNick.textContent = data.login
    })
}

getGitHubProfileInfos()

/*  
function functionName(argument){//code} ==== argument =>{}
*/
