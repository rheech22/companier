const getPetStoryDetail = async (postId) => {
  try {
    const response = await fetch(`/api/posts/${postId}`);
    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
};

const getReComments = async (commentId) => {
  try {
    const response = await fetch(`/api/${commentId}/recomments`);
    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
};

export { getPetStoryDetail, getReComments };
