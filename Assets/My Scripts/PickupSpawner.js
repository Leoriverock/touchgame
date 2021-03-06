﻿#pragma strict

var pickups : GameObject[];				// Array of pickup prefabs with the bomb pickup first and health second.
var pickupDeliveryTime : float = 5.0;		// Delay on delivery.
var dropRangeLeft : float;					// Smallest value of x in world coordinates the delivery can happen at.
var dropRangeRight : float;				// Largest value of x in world coordinates the delivery can happen at.



function Start ()
{
	// Start the first delivery.
	StartCoroutine(DeliverPickup());
}


function DeliverPickup()
{
	// Wait for the delivery delay.
	yield new WaitForSeconds(pickupDeliveryTime);

	// Create a random x coordinate for the delivery in the drop range.
	var dropPosX : float = Random.Range(dropRangeLeft, dropRangeRight);

	// Create a position with the random x coordinate.
	var dropPos : Vector3 = new Vector3(dropPosX, 15.0, 1.0);
	
	// ... instantiate a random pickup at the drop position.
	var pickupIndex : int = Random.Range(0, pickups.Length);
	Instantiate(pickups[pickupIndex], dropPos, Quaternion.identity);

}

