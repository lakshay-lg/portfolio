import React from 'react';
import { Terminal, Cpu, Brain, Layers, Code, User, Mail, ExternalLink, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <div className="grid-bg" />
      
      {/* Hero Section */}
      <section className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="mono" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          <span className="terminal-prompt">guest@lakshay:~$</span> whoami
        </div>
        <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          Lakshay <br />
          <span style={{ color: 'var(--secondary)' }}>Systems & AI Architect</span>
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', lineHeight: '1.6', color: '#a1a1aa', marginBottom: '2rem' }}>
          IIT Delhi '27 • Civil Engineering • Computer Science Minor
          <br />
          Building robust systems from the ground up—from Unix shells and high-performance Redis clones to Agentic RAG pipelines and edge AI optimization.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/lakshay-lg" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code size={20} /> Github
          </a>
          <a href="https://linkedin.com/in/lakshay-aa7510293/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <User size={20} /> LinkedIn
          </a>
          <a href="mailto:lakshayf9@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={20} /> Email
          </a>
        </div>
      </section>

      {/* The Systems Forge */}
      <section id="systems" className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Cpu className="terminal-prompt" /> The Systems Forge
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          <div className="card">
            <h3 style={{ marginBottom: '0.75rem' }}>High-Performance Redis Clone</h3>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '1rem' }}>
              Low-latency, in-memory KV store built with raw C++. Implements RESP protocol, non-blocking I/O with poll/epoll, and AOF/RDB persistence.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">C++17</span>
              <span className="tag">Networking</span>
              <span className="tag">System Design</span>
            </div>

          </div>

          <div className="card">
            <h3 style={{ marginBottom: '0.75rem' }}>Custom Unix-like Shell</h3>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '1rem' }}>
              POSIX-compliant shell with process lifecycle management (fork/exec), pipelines, signal handling, and I/O redirection.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">C</span>
              <span className="tag">Linux Kernel</span>
              <span className="tag">POSIX</span>
            </div>

          </div>

          <div className="card">
            <h3 style={{ marginBottom: '0.75rem' }}>Edge AI Optimization Pipeline</h3>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '1rem' }}>
              Optimized YOLOv8-tiny for edge hardware using TensorRT INT8 quantization, achieving 128 FPS on Jetson-based GPUs.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">TensorRT</span>
              <span className="tag">ONNX</span>
              <span className="tag">CUDA</span>
            </div>

          </div>
        </div>
      </section>

      {/* The AI Lab */}
      <section id="ai" className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Brain className="terminal-prompt" /> The AI Lab
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          <div className="card">
            <h3 style={{ marginBottom: '0.75rem' }}>Agentic RAG System</h3>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '1rem' }}>
              Chat across multiple PDFs simultaneously. Chunks, embeds, and indexes documents into FAISS at upload time — then uses conversational memory to handle follow-up questions naturally. Switch between Llama, Qwen, and other Groq-hosted LLMs mid-conversation without losing context.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">Python</span>
              <span className="tag">LangChain</span>
              <span className="tag">FAISS</span>
              <span className="tag">Groq</span>
              <span className="tag">Gradio</span>
            </div>
            <a href="https://leqz275-rag-chat.hf.space" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '0.8rem', color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
              LIVE DEMO <ChevronRight size={14} />
            </a>
            <a href="https://colab.research.google.com/drive/1OdkK15xgg8HdmrfEyQVAw0Pypc2GjsJ7?usp=sharing" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '0.8rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              VIEW COLAB <ChevronRight size={14} />
            </a>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '0.75rem' }}>Book Recommender System</h3>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '1rem' }}>
              Full-stack discovery engine powered by collaborative filtering on 270k+ books. Precomputes pairwise cosine similarity across a 706×810 user-book pivot matrix to surface titles that resonate with the same audience — no genre tags, just pure behavioural signal.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">Python</span>
              <span className="tag">scikit-learn</span>
              <span className="tag">Flask</span>
              <span className="tag">NumPy / Pandas</span>
              <span className="tag">Gunicorn</span>
            </div> 
            <a href="https://books.lakshay.systems/" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '0.8rem', color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
              LIVE DEMO <ChevronRight size={14} />
            </a>
          </div>


        </div>
      </section>

      {/* The Application Layer */}
      <section id="apps" className="container" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Layers className="terminal-prompt" /> The Application Layer
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          <div className="card">
            <h3 style={{ marginBottom: '0.75rem' }}>ShopSphere (Flash Sale Engine)</h3>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '1rem' }}>
              Industrial-grade ordering system handling 1,000+ RPS with Redis-based distributed locking and RabbitMQ queues.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">MERN Stack</span>
              <span className="tag">Redis</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <a href="https://github.com/lakshay-lg/ShopSphere" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '0.8rem', color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
              VIEW REPO <ChevronRight size={14} />
            </a>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '0.75rem' }}>Mini-Vercel Deployment Platform</h3>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '1rem' }}>
              Automated cloud platform that builds and hosts sites from GitHub via Docker and a custom reverse proxy.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">Docker</span>
              <span className="tag">Node.js</span>
              <span className="tag">Nginx</span>
            </div>
            <a href="#" className="mono" style={{ fontSize: '0.8rem', color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
              LIVE DEMO <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Technical Toolkit */}
      <section className="container" style={{ borderTop: '1px solid var(--border)', paddingBottom: '8rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Technical Toolkit</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div>
            <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Languages</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li>C / C++ (C++17)</li>
              <li>Python (PyTorch/DL)</li>
              <li>JavaScript / TypeScript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Systems</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li>Linux (Debian/Bash)</li>
              <li>Docker & Containers</li>
              <li>Redis / PostgreSQL</li>
              <li>Distributed Systems</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>AI Research</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li>RAG Architectures</li>
              <li>LLM Benchmarking</li>
              <li>Fine-tuning (LoRA)</li>
              <li>Vector Databases</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Design Tools</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li>Unity Engine</li>
              <li>System Thinking</li>
              <li>Technical Writing</li>
              <li>Rapid Prototyping</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#050505', borderTop: '1px solid var(--border)', padding: '4rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="mono" style={{ opacity: 0.5 }}>
            © 2026 LAKSHAY. BUILT WITH NEXT.JS
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/lakshay-lg" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.5 }}>
              <Code size={20} />
            </a>
            <a href="https://linkedin.com/in/lakshay-aa7510293/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.5 }}>
              <User size={20} />
            </a>
            <a href="mailto:lakshayf9@gmail.com" style={{ opacity: 0.5 }}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
