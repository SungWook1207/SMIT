# 3주차 6세션: 개발 환경 설정

## 📌 세션 개요
- **주제**: 개발 환경 구축
- **목표**: React/Next.js 학습을 위한 기본 개발 환경을 설정하고 Git 및 GitHub 사용법을 익힌다.
- **시간**: 2시간
- **필수 도구**: VS Code, Node.js, Git, GitHub 계정

---

## ✅ Setting Up the Development Environment (1시간)
### ● Node.js, npm/yarn, VS Code 설치 및 설정
1. **Node.js 설치**
    - [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 다운로드 및 설치
    - `node -v` 및 `npm -v`로 설치 확인
    - npm 대신 Yarn 사용 시 `npm install --global yarn` 실행

2. **VS Code 설치 및 기본 설정**
    - [VS Code 공식 사이트](https://code.visualstudio.com/)에서 다운로드 및 설치
    - 확장 프로그램 추천: ESLint, Prettier, GitLens
    - 기본 설정: 테마, 폰트 크기, 자동 저장 활성화

3. **React 개발을 위한 프로젝트 생성 테스트**
   ```sh
   npx create-react-app my-app
   cd my-app
   npm start
   ```
    - 프로젝트가 정상적으로 실행되는지 확인

### ● Git 설치 및 GitHub 계정 생성
1. **Git 설치**
    - [Git 공식 사이트](https://git-scm.com/)에서 다운로드 및 설치
    - `git --version`으로 설치 확인

2. **GitHub 계정 생성 및 SSH Key 등록**
    - [GitHub](https://github.com/) 가입
    - SSH Key 생성 (`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`)
    - GitHub에 SSH Key 등록
    - 연결 확인: `ssh -T git@github.com`

3. **Git 기본 설정**
   ```sh
   git config --global user.name "Your Name"
   git config --global user.email "your_email@example.com"
   ```

---

## ✅ Introduction to Git & GitHub (1시간)
### ● git init, git add, git commit, git push 명령어 실습
1. **새로운 Git 저장소 생성 및 초기화**
   ```sh
   mkdir my-project
   cd my-project
   git init
   ```

2. **파일 추가 및 커밋**
   ```sh
   echo "# My Project" > README.md
   git add README.md
   git commit -m "첫 커밋"
   ```

3. **GitHub 원격 저장소 연결 및 코드 업로드**
   ```sh
   git remote add origin https://github.com/your-username/my-project.git
   git branch -M main
   git push -u origin main
   ```
    - GitHub에서 저장소가 정상적으로 생성되었는지 확인

4. **기본적인 Git 명령어 연습**
   ```sh
   git status
   git log
   git pull origin main
   ```

5. **협업을 위한 Git 브랜치 실습**
   ```sh
   git checkout -b feature-branch
   git push -u origin feature-branch
   ```

---

## 🎯 3주차 6세션 완료!
"개발 환경을 제대로 설정하면 학습과 실습이 더욱 원활해집니다! 다음 주부터는 본격적으로 React와 Next.js를 다룹니다." 🚀

