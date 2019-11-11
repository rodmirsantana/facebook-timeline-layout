import React, { Component } from 'react';

import './styles.css';

import PostItem from '../PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rodrigo Miranda',
          avatar:
            'https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-1/c1.0.320.320a/p320x320/21369284_1057157144387398_1391205943855748860_n.jpg?_nc_cat=101&_nc_oc=AQlmR6ksHgFNSnA_Lg2UCAeb-3vRsosFAwhwBbVyIijD9LEsZb5MEl2F2glc-RbZ8sfpFVWAiXaBZylk2BDybRjQ&_nc_ht=scontent.fplu3-1.fna&oh=897df2c2f5b1d75e0298b31b8c5e0abe&oe=5E46E0E2'
        },
        date: '10 Nov 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-1/p320x320/59480734_2249174048509235_2974090043016085504_n.jpg?_nc_cat=111&_nc_oc=AQmHbVUmyxTt4NQzYmMA634R6rdMVlWl8p0UOEWfey8qKOqXEmBzRNxkV_LZ-HH9aZPaH71spzXYLuQrlxv-nVdE&_nc_ht=scontent.fplu3-1.fna&oh=cf2d27fca83aee95773622badc8839c8&oe=5E5C675A'
            },
            date: '11 Nov 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Mark Zuckerberg',
          avatar:
            'https://scontent.fplu3-1.fna.fbcdn.net/v/t34.0-1/p320x320/16176889_112685309244626_578204711_n.jpg?_nc_cat=1&_nc_oc=AQn1MlEfl7e2oA1BEeE1dHM9pM3mxoChdtzo9dEd5URbkb4outK0UVgmLxCEYAiiDXBpDrdTe3pQrGBQtStKMADj&_nc_ht=scontent.fplu3-1.fna&oh=c1fba37d8feddd0d953eb5dae9b2fb45&oe=5DCB85E7'
        },
        date: '12 Nov 2019',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna lacinia, vulputate est a, faucibus diam. Nulla sit amet lobortis metus. Aenean congue mauris vitae bibendum consectetur. Phasellus ut.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Elon Musk',
              avatar:
                'https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-1/p320x320/59305803_114832149721631_792010377612230656_n.jpg?_nc_cat=103&_nc_oc=AQmaEyfw-hHc7fdo60jwOrqxYhkl8nz5DIyzGZrHQaPLilWgTbNfUgltgEjw6-DyGWoSsc8KVa4jgR7vTGChOoIv&_nc_ht=scontent.fplu3-1.fna&oh=0f57dca4ad56322f0b941703c79f3f97&oe=5E4DE092'
            },
            date: '11 Nov 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, ante at porta lobortis, tortor ligula dignissim quam, vitae iaculis nisl tellus a enim. Suspendisse potenti. Aliquam et nisi erat. Vivamus ut sagittis dolor, quis rhoncus magna. Aenean eget sodales enim. Nullam placerat augue eget ligula finibus, eget vehicula ex.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Guilherme Pellizetti',
          avatar:
            'https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-1/p320x320/46674495_2501500269876611_5728972364062916608_o.jpg?_nc_cat=101&_nc_oc=AQmvcqAdOz6H7WRt2NqCaz5O5C8UTzOgz9m0oGvM-ptyJhYD-1qpaK9f_N0Mk5NfaHbYfUttMy-lkmCPBT7vwOX4&_nc_ht=scontent.fplu3-1.fna&oh=1e7a8888a938be3abe292f73ccfd71f0&oe=5E5F891A'
        },
        date: '12 Nov 2019',
        content:
          'Faaalaaaa deeevs! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget erat tempor, molestie mi eget, semper dolor. Proin faucibus aliquet massa, id molestie nulla interdum ut. Integer fringilla congue urna.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-1/p320x320/59480734_2249174048509235_2974090043016085504_n.jpg?_nc_cat=111&_nc_oc=AQmHbVUmyxTt4NQzYmMA634R6rdMVlWl8p0UOEWfey8qKOqXEmBzRNxkV_LZ-HH9aZPaH71spzXYLuQrlxv-nVdE&_nc_ht=scontent.fplu3-1.fna&oh=cf2d27fca83aee95773622badc8839c8&oe=5E5C675A'
            },
            date: '12 Nov 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, ante at porta lobortis, tortor ligula dignissim quam, vitae iaculis nisl tellus a enim. Suspendisse potenti. Aliquam et nisi erat. Vivamus ut sagittis dolor, quis rhoncus magna. Aenean eget sodales enim. Nullam placerat augue eget ligula finibus, eget vehicula ex.'
          },
          {
            id: 2,
            author: {
              name: 'Robson Marques',
              avatar:
                'https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-1/p320x320/62237476_893371231007663_8334481808523526144_n.jpg?_nc_cat=100&_nc_oc=AQmTgPLSHIuEqhLGbO8anlO6ZiOHmIFfg99xQT6VqVLgvUgtSLCBQ8gHGpezit57DeL8lvxtDBTF5LMaQ-v3ZYWr&_nc_ht=scontent.fplu3-1.fna&oh=1acc7ca35e6a73f4a97b1fed0589c3b7&oe=5E41B92D'
            },
            date: '13 Nov 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat justo eget erat tincidunt ullamcorper. Donec eget augue vitae turpis lacinia commodo. Nullam fringilla arcu ut quam lobortis pellentesque. Sed quis sem eget leo elementum pulvinar. Vestibulum porttitor diam in diam gravida, eget auctor libero ultrices. Curabitur finibus orci vitae augue dapibus pharetra. Nullam facilisis tortor ac diam tincidunt eleifend.'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <ul className="post-list">
        {posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
