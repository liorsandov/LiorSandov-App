import styles from './color.module.css';

enum colors {
    Red = 'Red',
    Blue = "Blue",
    Green = "Green",
  }

export default function color(x: string): string {
    if(x === colors.Red){
        return x = styles.Red;
    }
    if(x === colors.Blue){
        return x = styles.Blue;
    }
    if(x === colors.Green){
        return x = styles.Green;
    }
    return (x)
}
