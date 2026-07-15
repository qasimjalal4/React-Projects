import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ProfileCard from "./ProfileCard";


    const fakeUser = {
    login: "octocat",
    name: "The Octocat",
    location: "San Francisco",
    bio: "Github mascot",
    public_repos: 8,
    followers: 120,
    following: 5,
    avatar_url: "avatar.png",
    html_url: "https://github.com/octocat",
    };


    const userWithoutBio = {
      ...fakeUser,
      bio: ""
    }

describe("ProfileCard", () => {

  test('renders default message when no user is provided', () => {

    render(<ProfileCard user={null} />)


    expect(screen.getByText('Enter a Github username')).toBeInTheDocument();
  })

  test('renders github user information', () => {
 
    render(<ProfileCard user={fakeUser} />)
    
    expect(screen.getByText('@octocat')).toBeInTheDocument();
    expect(screen.getByText('The Octocat')).toBeInTheDocument();
    expect(screen.getByText('San Francisco')).toBeInTheDocument();
    expect(screen.getByText('Github mascot')).toBeInTheDocument();

    const link = screen.getByRole('link', {
      name: 'View on Github'
    })

    expect(link).toHaveAttribute('href', 'https://github.com/octocat')

    const image = screen.getByRole('img', {
      name: 'octocat avatar'
    }) 

    expect(image).toHaveAttribute('src','avatar.png')

    expect(screen.getByTestId('public-repos-card')).toHaveTextContent('Public Repos')
    expect(screen.getByTestId('public-repos-card')).toHaveTextContent('8')

    expect(screen.getByTestId('followers-card')).toHaveTextContent('Followers')
    expect(screen.getByTestId('followers-card')).toHaveTextContent('120')

    expect(screen.getByTestId('following-card')).toHaveTextContent('Following')
    expect(screen.getByTestId('following-card')).toHaveTextContent('5')

  })


  test('renders github user who has no bio', () => {

    render(<ProfileCard user={userWithoutBio} />)

    expect(screen.getByText('No bio')).toBeInTheDocument()
  })
})