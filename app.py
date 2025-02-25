import streamlit as st
from PIL import Image
import streamlit.components.v1 as components

# Set page configuration
st.set_page_config(page_title="Hrishikesh Kalola | Portfolio", layout="wide")


# Sidebar - Profile Information
import streamlit as st

# Load image
profile_image = "profile.jpg"  # Ensure this is the correct path

# Sidebar - Profile Information
with st.sidebar:
    st.image(profile_image, width=150, use_container_width=True, output_format="PNG")
    
    # Apply CSS styling to make it circular
    st.markdown(
        """
        <style>
            img {
                border-radius: 50%;
                display: block;
                box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
                justify-content: center;
            }
            #link-img{
            border-radius: 0%;
            display: block;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
            justify-content: center;
        }
        </style>
        """,
        unsafe_allow_html=True
    )

    st.markdown("<h1 style='text-align: center;'><b>Hrishikesh Kalola</b></h1>", unsafe_allow_html=True)
    st.markdown("<h4 style='text-align: center; '>AI Engineer | Data Scientist | Developer</h4>", unsafe_allow_html=True)


    # components.html(f'<div style="display: flex; justify-content: center;">{linkedin_badge}</div>', height=300)
    
    st.markdown(
        """
        <div style="display: flex; justify-content: center;">
            <a href="https://in.linkedin.com/in/hrishk">
                <img src="https://img.shields.io/badge/LinkedIn-Profile-purple?logo=linkedin" style="height: 30px ; margin : 20px" id="link-img">
            </a>
        </div>
        <br>
        """,
        unsafe_allow_html=True
    )
    st.markdown(
        """
        <div style="display: flex; justify-content: center;">
            <a href="https://github.com/hrishi-008">
                <img src="https://img.shields.io/badge/GitHub-Profile-purple?logo=github" style="height: 30px;" id="link-img">
            </a>
        </div>
        """,
        unsafe_allow_html=True
    )

# Main Page - Tabs
st.title("🚀 Welcome to My Portfolio")
tabs = st.tabs(["🏠 Home", "💻 Projects", "📌 Experience", "📝 Blogs", "📩 Contact"])

# Home Tab
with tabs[0]:
    st.write(
        """
        ### 👨‍💻 About Me  
        Passionate about **Artificial Intelligence, Machine Learning, and Data Science**, I thrive on solving real-world problems through innovative solutions.  
        I believe in the power of technology to drive meaningful change.  

        🔹 **Building AI-driven applications** 🤖  
        🔹 **Exploring the intersections of code & creativity**  
        🔹 **Continuous learning in the evolving tech landscape**  
        """
    )

    st.subheader("🌟 Skills")
    skills = ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "LLMs", "Streamlit Apps", "SQL"]
    st.write(" | ".join(skills))

# Projects Tab
with tabs[1]:
    st.subheader("💡 Featured Projects")
    
    projects = [
        {"title": "SummarAI", "desc": "An AI-powered search summarizer using FAISS and LLMs.", "link": "https://github.com/yourrepo"},
        {"title": "Tomato Disease Classifier", "desc": "Image classification model for plant disease detection.", "link": "https://github.com/yourrepo"},
        {"title": "NL2SQL Transformer", "desc": "Natural language to SQL query generator.", "link": "https://github.com/yourrepo"},
    ]
    
    for proj in projects:
        st.markdown(f"- **[{proj['title']}]({proj['link']})**: {proj['desc']}")

# Experience Tab
with tabs[2]:
    # Work Experience Section with Timeline
    st.title("📌 Work Experience Timeline")

    # Define Work Experience Data
    experience = {
        "AI Intern at Paperchase": {
            "title": "AI Engineer Intern",
            "duration": "Dec 2024 - Present",
            "description": """
            • Developed a fine-tuned Natural Language to SQL LLM model to enable seamless 
              conversion of user queries into SQL statements
              <br>
            • Built an AI-powered sales analytics pipeline for data-driven insights and reporting
            • Benchmarked complex SQL queries for enterprise clients, optimizing performance 
              and response times
              <br>
            • Queried and processed large-scale databases with 30+ lakh (3 million) rows and 
              multiple GBs of data, ensuring efficient data retrieval and analysis
            """,
        },
        "ML Engineer Intern at XYZ": {
            "title": "ML Engineer Intern at XYZ",
            "duration": "July 2024 - Dec 2024",
            "description": """
            • Worked on computer vision models for image classification tasks
            • Built a deep learning pipeline for object detection
            • Enhanced model efficiency with pruning & quantization techniques
            """,
        },
        "Data Science Intern at ABC Corp": {
            "title": "Data Science Intern at ABC Corp",
            "duration": "Jan 2024 - June 2024",
            "description": """
            • Analyzed large-scale datasets for customer segmentation
            • Implemented time-series forecasting for demand prediction
            • Developed interactive dashboards using Streamlit
            """,
        },
    }

    # Timeline Navigation
    selected_role = st.radio(
        "🕒 Select a role to view details:", 
        list(experience.keys()), 
        horizontal=True
    )

    # Display Selected Experience Card
    exp = experience[selected_role]

    st.markdown(
        f"""
        <div style="background-color: #000000; padding: 15px; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
            <h3 style="color: #2c3e50;">{exp["title"]}</h3>
            <p style="color: #7f8c8d;"><strong>{exp["duration"]}</strong></p>
            <p>{exp["description"]}</p>
        </div>
        """,
        unsafe_allow_html=True
    )


# Blogs Tab
with tabs[3]:
    st.subheader("📝 Publications & Blogs")
    
    blogs = [
        {"title": "LinkedIn Post 1", "link": "https://linkedin.com/yourpost1"},
        {"title": "Medium Article on AI", "link": "https://medium.com/@yourprofile"},
    ]
    
    for blog in blogs:
        st.markdown(f"- [{blog['title']}]({blog['link']})")

# Contact Tab
with tabs[4]:
    st.subheader("📩 Get in Touch")
    st.write("Have a question or want to collaborate? Drop a message below! 👇")

    contact_form = st.text_area("Enter your message")
    if st.button("Submit"):
        st.success("✅ Message sent successfully! I'll get back to you soon.")

