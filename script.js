// إضافة قصص وصور منشورة
const publishForm = document.getElementById('publish-form');
const storiesSection = document.getElementById('stories-section');
const imagesSection = document.getElementById('images-section');

// تفاعل زر الإعجاب
const handleLikeButton = (likeButton) => {
    likeButton.addEventListener('click', function () {
        let likes = parseInt(likeButton.innerText.split(' ')[1]) || 0;
        likeButton.innerText = `إعجاب (${likes + 1})`;
    });
};

// تفاعل زر التعليق
const handleCommentButton = (commentButton, storyElement) => {
    commentButton.addEventListener('click', function () {
        const commentText = prompt('أضف تعليقك:');
        if (commentText) {
            const commentSection = storyElement.querySelector('.comment-section');
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerText = commentText;
            commentSection.appendChild(commentDiv);
        }
    });
};

// نشر قصة جديدة
publishForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const storyText = document.getElementById('story').value;

    // إنشاء عنصر جديد للقصة
    const storyElement = document.createElement('div');
    storyElement.classList.add('story');
    storyElement.innerHTML = `
        <h3>${title}</h3>
        <p>${storyText}</p>
        <button class="like-btn">إعجاب (0)</button>
        <button class="comment-btn">تعليق</button>
        <div class="comment-section"></div>
    `;

    // إضافة القصة إلى الصفحة
    storiesSection.appendChild(storyElement);

    // التعامل مع أزرار الإعجاب والتعليق
    const likeButton = storyElement.querySelector('.like-btn');
    const commentButton = storyElement.querySelector('.comment-btn');
    handleLikeButton(likeButton);
    handleCommentButton(commentButton, storyElement);

    // إعادة تعيين الحقول
    publishForm.reset();
});
