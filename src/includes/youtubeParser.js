function extractYouTubeVideoId(input) {
    // Check if the input is a valid YouTube video ID
    const regExp = /^[\w-]{11}$/;
    const match = input.match(regExp);
  
    if (match) {
      return input; // Return the video ID
    }
  
    // Extract the video ID from the URL using a regular expression
    const urlRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts\/|watch\?.*v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})(?:\S+)?/;
    const urlMatch = input.match(urlRegExp);
  
    if (urlMatch && urlMatch[1]) {
      return urlMatch[1]; // Return the video ID
    }
  
    // Return null if the input is neither a valid video ID nor a valid YouTube URL
    return null;
  }
  
export default extractYouTubeVideoId;